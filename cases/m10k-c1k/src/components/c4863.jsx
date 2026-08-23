import React from 'react';
const LABEL_4863 = 'component_4863';
export function Component4863({ value = 4863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4863, 'data-value': derived.doubled }, children);
}
export default Component4863;
