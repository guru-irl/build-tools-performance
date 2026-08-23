import React from 'react';
const LABEL_7820 = 'component_7820';
export function Component7820({ value = 7820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7820, 'data-value': derived.doubled }, children);
}
export default Component7820;
