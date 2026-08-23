import React from 'react';
const LABEL_27401 = 'component_27401';
export function Component27401({ value = 27401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27401, 'data-value': derived.doubled }, children);
}
export default Component27401;
