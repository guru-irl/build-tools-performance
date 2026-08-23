import React from 'react';
const LABEL_27049 = 'component_27049';
export function Component27049({ value = 27049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27049, 'data-value': derived.doubled }, children);
}
export default Component27049;
