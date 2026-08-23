import React from 'react';
const LABEL_28671 = 'component_28671';
export function Component28671({ value = 28671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28671, 'data-value': derived.doubled }, children);
}
export default Component28671;
