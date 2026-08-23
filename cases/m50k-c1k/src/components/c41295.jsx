import React from 'react';
const LABEL_41295 = 'component_41295';
export function Component41295({ value = 41295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41295, 'data-value': derived.doubled }, children);
}
export default Component41295;
