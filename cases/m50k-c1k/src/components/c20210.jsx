import React from 'react';
const LABEL_20210 = 'component_20210';
export function Component20210({ value = 20210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20210, 'data-value': derived.doubled }, children);
}
export default Component20210;
