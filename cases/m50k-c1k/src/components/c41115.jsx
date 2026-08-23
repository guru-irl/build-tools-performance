import React from 'react';
const LABEL_41115 = 'component_41115';
export function Component41115({ value = 41115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41115, 'data-value': derived.doubled }, children);
}
export default Component41115;
