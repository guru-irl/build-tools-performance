import React from 'react';
const LABEL_34686 = 'component_34686';
export function Component34686({ value = 34686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34686, 'data-value': derived.doubled }, children);
}
export default Component34686;
