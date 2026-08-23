import React from 'react';
const LABEL_34082 = 'component_34082';
export function Component34082({ value = 34082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34082, 'data-value': derived.doubled }, children);
}
export default Component34082;
