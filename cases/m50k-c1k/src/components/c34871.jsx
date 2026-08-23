import React from 'react';
const LABEL_34871 = 'component_34871';
export function Component34871({ value = 34871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34871, 'data-value': derived.doubled }, children);
}
export default Component34871;
