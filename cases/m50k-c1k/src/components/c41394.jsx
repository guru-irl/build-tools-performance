import React from 'react';
const LABEL_41394 = 'component_41394';
export function Component41394({ value = 41394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41394, 'data-value': derived.doubled }, children);
}
export default Component41394;
