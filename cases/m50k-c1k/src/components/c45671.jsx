import React from 'react';
const LABEL_45671 = 'component_45671';
export function Component45671({ value = 45671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45671, 'data-value': derived.doubled }, children);
}
export default Component45671;
