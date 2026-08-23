import React from 'react';
const LABEL_45038 = 'component_45038';
export function Component45038({ value = 45038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45038, 'data-value': derived.doubled }, children);
}
export default Component45038;
