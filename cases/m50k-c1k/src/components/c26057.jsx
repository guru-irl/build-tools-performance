import React from 'react';
const LABEL_26057 = 'component_26057';
export function Component26057({ value = 26057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26057, 'data-value': derived.doubled }, children);
}
export default Component26057;
