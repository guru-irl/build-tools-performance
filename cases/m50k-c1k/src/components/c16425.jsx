import React from 'react';
const LABEL_16425 = 'component_16425';
export function Component16425({ value = 16425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16425, 'data-value': derived.doubled }, children);
}
export default Component16425;
