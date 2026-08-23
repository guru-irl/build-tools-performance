import React from 'react';
const LABEL_6804 = 'component_6804';
export function Component6804({ value = 6804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6804, 'data-value': derived.doubled }, children);
}
export default Component6804;
