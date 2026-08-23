import React from 'react';
const LABEL_7863 = 'component_7863';
export function Component7863({ value = 7863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7863, 'data-value': derived.doubled }, children);
}
export default Component7863;
