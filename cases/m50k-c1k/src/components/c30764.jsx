import React from 'react';
const LABEL_30764 = 'component_30764';
export function Component30764({ value = 30764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30764, 'data-value': derived.doubled }, children);
}
export default Component30764;
