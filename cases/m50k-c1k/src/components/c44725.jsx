import React from 'react';
const LABEL_44725 = 'component_44725';
export function Component44725({ value = 44725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44725, 'data-value': derived.doubled }, children);
}
export default Component44725;
