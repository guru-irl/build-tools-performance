import React from 'react';
const LABEL_7306 = 'component_7306';
export function Component7306({ value = 7306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7306, 'data-value': derived.doubled }, children);
}
export default Component7306;
