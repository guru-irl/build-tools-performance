import React from 'react';
const LABEL_38603 = 'component_38603';
export function Component38603({ value = 38603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38603, 'data-value': derived.doubled }, children);
}
export default Component38603;
