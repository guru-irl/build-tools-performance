import React from 'react';
const LABEL_27303 = 'component_27303';
export function Component27303({ value = 27303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27303, 'data-value': derived.doubled }, children);
}
export default Component27303;
