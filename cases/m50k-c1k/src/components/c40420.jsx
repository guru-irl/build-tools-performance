import React from 'react';
const LABEL_40420 = 'component_40420';
export function Component40420({ value = 40420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40420, 'data-value': derived.doubled }, children);
}
export default Component40420;
