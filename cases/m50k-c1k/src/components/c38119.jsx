import React from 'react';
const LABEL_38119 = 'component_38119';
export function Component38119({ value = 38119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38119, 'data-value': derived.doubled }, children);
}
export default Component38119;
