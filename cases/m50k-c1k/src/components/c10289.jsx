import React from 'react';
const LABEL_10289 = 'component_10289';
export function Component10289({ value = 10289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10289, 'data-value': derived.doubled }, children);
}
export default Component10289;
