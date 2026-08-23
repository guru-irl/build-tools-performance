import React from 'react';
const LABEL_45769 = 'component_45769';
export function Component45769({ value = 45769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45769, 'data-value': derived.doubled }, children);
}
export default Component45769;
