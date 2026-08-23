import React from 'react';
const LABEL_7806 = 'component_7806';
export function Component7806({ value = 7806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7806, 'data-value': derived.doubled }, children);
}
export default Component7806;
