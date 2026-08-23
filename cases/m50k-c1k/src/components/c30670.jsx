import React from 'react';
const LABEL_30670 = 'component_30670';
export function Component30670({ value = 30670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30670, 'data-value': derived.doubled }, children);
}
export default Component30670;
