import React from 'react';
const LABEL_42774 = 'component_42774';
export function Component42774({ value = 42774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42774, 'data-value': derived.doubled }, children);
}
export default Component42774;
