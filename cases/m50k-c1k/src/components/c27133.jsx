import React from 'react';
const LABEL_27133 = 'component_27133';
export function Component27133({ value = 27133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27133, 'data-value': derived.doubled }, children);
}
export default Component27133;
