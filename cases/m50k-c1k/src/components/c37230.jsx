import React from 'react';
const LABEL_37230 = 'component_37230';
export function Component37230({ value = 37230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37230, 'data-value': derived.doubled }, children);
}
export default Component37230;
