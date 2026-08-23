import React from 'react';
const LABEL_26975 = 'component_26975';
export function Component26975({ value = 26975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26975, 'data-value': derived.doubled }, children);
}
export default Component26975;
