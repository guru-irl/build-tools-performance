import React from 'react';
const LABEL_20733 = 'component_20733';
export function Component20733({ value = 20733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20733, 'data-value': derived.doubled }, children);
}
export default Component20733;
