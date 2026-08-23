import React from 'react';
const LABEL_16412 = 'component_16412';
export function Component16412({ value = 16412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16412, 'data-value': derived.doubled }, children);
}
export default Component16412;
