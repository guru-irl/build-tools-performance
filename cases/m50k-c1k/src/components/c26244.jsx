import React from 'react';
const LABEL_26244 = 'component_26244';
export function Component26244({ value = 26244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26244, 'data-value': derived.doubled }, children);
}
export default Component26244;
