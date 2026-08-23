import React from 'react';
const LABEL_43289 = 'component_43289';
export function Component43289({ value = 43289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43289, 'data-value': derived.doubled }, children);
}
export default Component43289;
