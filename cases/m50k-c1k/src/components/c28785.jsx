import React from 'react';
const LABEL_28785 = 'component_28785';
export function Component28785({ value = 28785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28785, 'data-value': derived.doubled }, children);
}
export default Component28785;
