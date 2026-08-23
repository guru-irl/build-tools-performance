import React from 'react';
const LABEL_7543 = 'component_7543';
export function Component7543({ value = 7543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7543, 'data-value': derived.doubled }, children);
}
export default Component7543;
