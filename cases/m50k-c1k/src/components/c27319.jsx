import React from 'react';
const LABEL_27319 = 'component_27319';
export function Component27319({ value = 27319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27319, 'data-value': derived.doubled }, children);
}
export default Component27319;
