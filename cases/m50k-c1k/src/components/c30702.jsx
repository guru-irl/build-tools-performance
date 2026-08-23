import React from 'react';
const LABEL_30702 = 'component_30702';
export function Component30702({ value = 30702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30702, 'data-value': derived.doubled }, children);
}
export default Component30702;
