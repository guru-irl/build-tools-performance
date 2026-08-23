import React from 'react';
const LABEL_34008 = 'component_34008';
export function Component34008({ value = 34008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34008, 'data-value': derived.doubled }, children);
}
export default Component34008;
