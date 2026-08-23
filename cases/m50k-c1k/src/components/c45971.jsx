import React from 'react';
const LABEL_45971 = 'component_45971';
export function Component45971({ value = 45971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45971, 'data-value': derived.doubled }, children);
}
export default Component45971;
