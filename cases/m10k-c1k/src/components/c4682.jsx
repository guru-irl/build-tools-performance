import React from 'react';
const LABEL_4682 = 'component_4682';
export function Component4682({ value = 4682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4682, 'data-value': derived.doubled }, children);
}
export default Component4682;
