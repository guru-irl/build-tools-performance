import React from 'react';
const LABEL_40319 = 'component_40319';
export function Component40319({ value = 40319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40319, 'data-value': derived.doubled }, children);
}
export default Component40319;
