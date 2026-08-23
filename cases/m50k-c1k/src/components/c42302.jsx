import React from 'react';
const LABEL_42302 = 'component_42302';
export function Component42302({ value = 42302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42302, 'data-value': derived.doubled }, children);
}
export default Component42302;
