import React from 'react';
const LABEL_10108 = 'component_10108';
export function Component10108({ value = 10108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10108, 'data-value': derived.doubled }, children);
}
export default Component10108;
