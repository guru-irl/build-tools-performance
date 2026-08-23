import React from 'react';
const LABEL_26769 = 'component_26769';
export function Component26769({ value = 26769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26769, 'data-value': derived.doubled }, children);
}
export default Component26769;
