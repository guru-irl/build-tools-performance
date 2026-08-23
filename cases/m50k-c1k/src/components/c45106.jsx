import React from 'react';
const LABEL_45106 = 'component_45106';
export function Component45106({ value = 45106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45106, 'data-value': derived.doubled }, children);
}
export default Component45106;
