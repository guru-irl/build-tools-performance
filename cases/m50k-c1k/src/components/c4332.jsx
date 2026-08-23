import React from 'react';
const LABEL_4332 = 'component_4332';
export function Component4332({ value = 4332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4332, 'data-value': derived.doubled }, children);
}
export default Component4332;
