import React from 'react';
const LABEL_8671 = 'component_8671';
export function Component8671({ value = 8671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8671, 'data-value': derived.doubled }, children);
}
export default Component8671;
