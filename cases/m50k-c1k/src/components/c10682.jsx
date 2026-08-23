import React from 'react';
const LABEL_10682 = 'component_10682';
export function Component10682({ value = 10682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10682, 'data-value': derived.doubled }, children);
}
export default Component10682;
