import React from 'react';
const LABEL_28189 = 'component_28189';
export function Component28189({ value = 28189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28189, 'data-value': derived.doubled }, children);
}
export default Component28189;
