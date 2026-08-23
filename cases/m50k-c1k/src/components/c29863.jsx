import React from 'react';
const LABEL_29863 = 'component_29863';
export function Component29863({ value = 29863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29863, 'data-value': derived.doubled }, children);
}
export default Component29863;
