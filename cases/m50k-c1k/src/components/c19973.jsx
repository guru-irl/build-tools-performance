import React from 'react';
const LABEL_19973 = 'component_19973';
export function Component19973({ value = 19973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19973, 'data-value': derived.doubled }, children);
}
export default Component19973;
