import React from 'react';
const LABEL_27688 = 'component_27688';
export function Component27688({ value = 27688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27688, 'data-value': derived.doubled }, children);
}
export default Component27688;
