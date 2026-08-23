import React from 'react';
const LABEL_42231 = 'component_42231';
export function Component42231({ value = 42231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42231, 'data-value': derived.doubled }, children);
}
export default Component42231;
